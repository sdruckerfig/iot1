/*
 * File: app/view/LightbulbViewModel.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.LightbulbViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.lightbulb',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.util.Sorter',
        'Ext.util.Filter',
        'Ext.app.bind.Formula'
    ],

    data: {
        lightStatus: false,
        lightId: 0
    },

    stores: {
        Lights: {
            autoLoad: false,
            model: 'MyApp.model.Light',
            proxy: {
                type: 'ajax',
                url: '/hue',
                reader: {
                    type: 'json',
                    rootProperty: 'lights'
                }
            },
            sorters: {
                property: 'name'
            },
            filters: {
                property: 'reachable',
                value: true
            }
        }
    },
    formulas: {
        lightbulbUrl: function(get) {
            if (get('lightStatus')) {
                return 'resources/images/lightbulb_on.png';
            } else {
                return 'resources/images/lightbulb.png';
            }
        }
    }

});