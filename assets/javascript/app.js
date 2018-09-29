//Data Visualization Code Only
var pie = new d3pie("pieChart", {
    "header": {
        "title": {
            "text": "Food Options",
            "fontSize": 24,
            "font": "open sans"
        },
        
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasWidth": 590,
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
                "label": "Beef",
                "value": 218812,
                "color": "#00047c"
            },
            {
                "label": "Breakfast",
                "value": 157618,
                "color": "#2f3399"
            },
            {
                "label": "Chicken",
                "value": 114384,
                "color": "#2f52aa"
            },
            {
                "label": "Dessert",
                "value": 95002,
                "color": "#2e58c9"
            },
            {
                "label": "Lamb",
                "value": 36344,
                "color": "#4d6fcc"
            },
            {
                "label": "Miscellaneous",
                "value": 32170,
                "color": "#738def"
            },
            {
                "label": "Pasta",
                "value": 28561,
                "color": "#779fdd"
            },
            {
                "label": "Pork",
                "value": 264131,
                "color": "#9db5f2"
            },
            {
                "label": "Seafood",
                "value": 218812,
                "color": "#bccef2"
            },
            {
                "label": "Side",
                "value": 157618,
                "color": "#d7e5f7"
            },
            {
                "label": "Starter",
                "value": 114384,
                "color": "#000000"
            },
            {
                "label": "Vegan",
                "value": 95002,
                "color": "#000000"
            },
            {
                "label": "Vegetarian",
                "value": 78327,
                "color": "#000000"
            }
        ]
    },
    "labels": {
        "outer": {
            "pieDistance": 32
        },
        "inner": {
            "hideWhenLessThanPercentage": 3
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": true
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    }
});

