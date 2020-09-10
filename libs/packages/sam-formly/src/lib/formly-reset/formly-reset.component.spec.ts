  import { TestBed, ComponentFixture, async } from '@angular/core/testing';
  import { Component, ViewChild } from '@angular/core';
  import { FormGroup, ReactiveFormsModule } from '@angular/forms';
  import {
    FormlyModule,
    FormlyFormOptions,
    FormlyForm,
    FormlyFieldConfig
  } from '@ngx-formly/core';
  import { NoopAnimationsModule } from '@angular/platform-browser/animations';
  import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

  import { SdsFormlyModule } from '../formly/formly.module';
  import { SdsFormlyResetComponent } from './formly-reset.component';

  let resetEl: HTMLElement;
  let model: any;
  let fields: FormlyFieldConfig[];

  describe('SDS Formly Reset', () => {
    let testComp: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [SdsFormlyResetComponent, TestComponent],
        imports: [
          FontAwesomeTestingModule,
          NoopAnimationsModule,
          SdsFormlyModule,
          ReactiveFormsModule,
          FormlyModule.forRoot({})
        ]
      }).compileComponents();
    }));

    describe('without default values', () => {
      beforeEach(() => {
        fields = [
          {
            key: 'flat',
            type: 'input'
          },
          {
            key: 'nested',
            fieldGroup: [
              {
                key: 'nestedInput',
                type: 'input'
              }
            ]
          }
        ];

        fixture = TestBed.createComponent(TestComponent);
        testComp = fixture.componentInstance;

        fixture.detectChanges();
      });

      it('should reset form values to null if no values were set in model when clicked', () => {
        testComp.form.controls.flat.setValue('edit flat input');
        testComp.form.get('nested.nestedInput').setValue('edit nested input');

        expect(testComp.model).toEqual({
          flat: 'edit flat input',
          nested: { nestedInput: 'edit nested input' }
        });

        resetEl = fixture.nativeElement.querySelector('.usa-button');
        resetEl.click();

        expect(testComp.model).toEqual({
          flat: null,
          nested: { nestedInput: null }
        });
      });

      it('should clone both flat and nested values from initial model during resetModel if values were set when clicked', () => {
        const initialModel = {
          flat: 'flat value set',
          nested: { nestedInput: 'nested value set' }
        };

        testComp.model = initialModel;

        fixture.detectChanges();

        testComp.form.controls.flat.setValue('edit flat input');
        testComp.form.get('nested.nestedInput').setValue('edit nested input');

        fixture.detectChanges();

        expect(testComp.model).toEqual({
          flat: 'edit flat input',
          nested: { nestedInput: 'edit nested input' }
        });

        resetEl = fixture.nativeElement.querySelector('.usa-button');
        resetEl.click();

        expect(testComp.model).toEqual(initialModel);
      });
    });

    describe('with default values', () => {
      beforeEach(() => {
        fields = [
          {
            key: 'flat',
            type: 'input',
            defaultValue: 'flat defaultValue'
          },
          {
            key: 'nested',
            fieldGroup: [
              {
                key: 'nestedInput',
                type: 'input',
                defaultValue: 'nested defaultValue'
              }
            ]
          }
        ];

        fixture = TestBed.createComponent(TestComponent);
        testComp = fixture.componentInstance;

        fixture.detectChanges();
      });

      it("should have an initial model based on defaultValues", () => {
        expect(testComp.model).toEqual({
          flat: "flat defaultValue",
          nested: {
            nestedInput: "nested defaultValue"
          }
        });
      })

      it("should reset fields  to null if value isn't set in model when clicked", () => {
        resetEl = fixture.nativeElement.querySelector('.usa-button');
        resetEl.click();

        expect(testComp.model).toEqual({
          flat: null,
          nested: { nestedInput: null }
        });
      });
    });
  });

  @Component({
    template: `
      <form [formGroup]="form">
        <formly-form
          [form]="form"
          [fields]="fields"
          [model]="model"
          [options]="options"
        ></formly-form>
        <sds-formly-reset [options]="options"></sds-formly-reset>
      </form>
    `
  })
  class TestComponent {
    @ViewChild(FormlyForm) formlyForm: FormlyForm;
    form = new FormGroup({});
    options = {};
    fields = fields;
    model = model || {};
  }
