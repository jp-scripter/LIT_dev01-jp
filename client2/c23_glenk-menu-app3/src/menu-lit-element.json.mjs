var jMENU =
        [
            {
                text: 'File', menu: [
                    { text: 'New File', shortCutText: 'Ctrl+Shift+N' },
                    { text: 'Open File', shortCutText: 'Ctrl+O' },
                    { text: 'Save File', shortCutText: 'Ctrl+S' },
                    { text: '-' },
                    { text: 'Auto Save', checked: true, disabled: true }
                ]
            },
            {
                text: 'Edit', menu: [
                    { text: 'Undo', shortCutText: 'Ctrl+X', disabled: true, action: () => alert('Undo') },
                    { text: 'Redo', shortCutText: 'Ctrl+Y', disabled: true, action: () => alert('Redo') },
                    { text: '-' },
                    { text: 'Cut', shortCutText: 'Ctrl+X', action: () => alert('Cut') },
                    { text: 'Copy', shortCutText: 'Ctrl+C', action: () => alert('Copy') },
                    { text: 'Paste', shortCutText: 'Ctrl+V', action: () => alert('Paste') },
                    { text: '-' },
                    {
                        text: 'Align', menu: [
                            { text: 'Left Align' },
                            { text: 'Center' },
                            { text: 'Right Align' },
                            { text: '-' },
                            { text: 'Top Align' },
                            { text: 'Middle' },
                            { text: 'Bottom Align' },
                        ]
                    },
                    {
                        text: 'Distribute', menu: [
                            { text: 'Horizontal' },
                            { text: 'Vertical' },
                        ]
                    },
                    { text: '-' },
                    {
                        text: 'Navigation', menu: [
                            { text: 'Expand', shortCutText: 'Ctrl+End' },
                            { text: 'Collapse', shortCutText: 'Ctrl+Home' },
                        ]
                    },
                    { text: '-' },
                    { text: 'Find', shortCutText: 'Ctrl+F' },
                    { text: 'Replace', shortCutText: 'Ctrl+H' }
                ]
            },
            {
                text: 'Help', menu: [
                    { text: 'Welcome' },
                    { text: 'Help' },
                    { text: 'About' }
                ]
            }
        ];

   console.log( jMENU )

