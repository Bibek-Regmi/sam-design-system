const MATERIAL = {
    "pipes": [],
    "interfaces": [],
    "injectables": [],
    "classes": [],
    "directives": [],
    "components": [
        {
            "name": "TableComponent",
            "id": "component-TableComponent-432a5d839d382196e5735da1101eae76",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-table",
            "styleUrls": [
                "./table.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./table.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 12
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss']\n})\nexport class TableComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./table.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 8
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<p>\n  table works!\n</p>\n"
        }
    ],
    "modules": [
        {
            "name": "PackagesSamMaterialExtensionsModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": []
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": []
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "TableModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "TableComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "TableComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        }
    ],
    "miscellaneous": {
        "variables": [
            {
                "name": "context",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/sam-material-extensions/src/test.ts",
                "type": "",
                "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
            },
            {
                "name": "require",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/sam-material-extensions/src/test.ts",
                "type": "any"
            }
        ],
        "functions": [],
        "typealiases": [],
        "enumerations": [],
        "groupedVariables": {
            "libs/packages/sam-material-extensions/src/test.ts": [
                {
                    "name": "context",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/sam-material-extensions/src/test.ts",
                    "type": "",
                    "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
                },
                {
                    "name": "require",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/sam-material-extensions/src/test.ts",
                    "type": "any"
                }
            ]
        },
        "groupedFunctions": {},
        "groupedEnumerations": {},
        "groupedTypeAliases": {}
    }
};

export default MATERIAL;