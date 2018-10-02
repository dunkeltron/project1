//Data Visualization Code Only

//Category Pie Chart
var pie = new d3pie("pieChart", {
    "header": {
        // "title": {
        //     "text": "Category Options",
        //     "fontSize": 24,
        //     "font": "open sans"
        // },
        // "subtitle": {
		// 	"text": "184 Choices",
		// 	"color": "#999999",
		// 	"fontSize": 12,
		// 	"font": "open sans"
		// },
        // "titleSubtitlePadding": 9
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
                "value": 12.5,
                "color": "0033cc"
            },
            {
                "label": "Breakfast",
                "value": 1,
                "color": "#b3c6ff"
            },
            {
                "label": "Chicken",
                "value": 15.7,
                "color": "#002699"
            },
            {
                "label": "Dessert",
                "value": 25,
                "color": "#002080"
            },
            {
                "label": "Lamb",
                "value": 4.3,
                "color": "#1a53ff"
            },
            {
                "label": "Miscellaneous",
                "value": 4.8,
                "color": "#0040ff"
            },
            {
                "label": "Pasta",
                "value": 3.2,
                "color": "#668cff"
            },
            {
                "label": "Pork",
                "value": 4.3,
                "color": "#3366ff"
            },
            {
                "label": "Seafood",
                "value": 8.6,
                "color": "#0039e6"
            },
            {
                "label": "Side",
                "value": 3.2,
                "color": "#4d79ff"
            },
            {
                "label": "Starter",
                "value": 2.1,
                "color": "#809fff"
            },
            {
                "label": "Vegan",
                "value": 1.6,
                "color": "#99b3ff"
            },
            {
                "label": "Vegetarian",
                "value": 13,
                "color": "#002db3"
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
            "fontSize": 15
        },
        "percentage": {
            "color": "#ffffff",
			"decimalPlaces": 0,
			"fontSize": 12
        },
        "value": {
            "color": "#adadad",
            "fontSize": 13
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
            "speed": 300,
            "size": 14
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    }
});

//Area Pie Chart
var pie1 = new d3pie("pieChart1", {
	"header": {
		// "title": {
		// 	"text": "Area Options",
		// 	"fontSize": 24,
		// 	"font": "open sans"
		// },
		// "subtitle": {
		// 	"text": "184 Choices",
		// 	"color": "#999999",
		// 	"fontSize": 12,
		// 	"font": "open sans"
		// },
		// "titleSubtitlePadding": 9
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
				"label": "American",
				"value": 10.8,
				"color": "#145214"
			},
			{
				"label": "British",
				"value": 26.6,
				"color": "#0f3d0f"
			},
			{
				"label": "Canadian",
				"value": 6.6,
				"color": "#1f7a1f"
			},
			{
				"label": "Chinese",
				"value": 6.6,
				"color": "#248f24"
			},
			{
				"label": "Dutch",
				"value": 0.6,
				"color": "#99e699"
			},
			{
				"label": "French",
				"value": 15.2,
				"color": "#0f3d0f"
			},
			{
				"label": "Greek",
				"value": 0.6,
				"color": "#c2f0c2"
			},
			{
				"label": "Indian",
				"value": 5.4,
				"color": "#29a329"
			},
			{
				"label": "Irish",
				"value": 0.6,
				"color": "#ebfaeb"
			},
			{
				"label": "Italian",
				"value": 8.1,
				"color": "#196619"
			},
			{
				"label": "Jamacian",
				"value": 4.3,
				"color": "#2eb82e"
			},
			{
				"label": "Japanese",
				"value": 2.7,
				"color": "#33cc33"
			},
			{
				"label": "Malaysian",
				"value": 0.6,
				"color": "#adebad"
			},
			{
				"label": "Mexican",
				"value": 2.7,
				"color": "#47d147"
			},
			{
				"label": "Moroccan",
				"value": 3.2,
				"color": "#2eb82e"
			},
			{
				"label": "Russian",
				"value": 0.6,
				"color": "#d6f5d6"
			},
			{
				"label": "Spanish",
				"value": 1.6,
				"color": "#5cd65c"
			},
			{
				"label": "Thai",
				"value": 1.6,
				"color": "#70db70"
			},
			{
				"label": "Unknown",
				"value": 1,
				"color": "#85e085"
			},
			{
				"label": "Vietnamese",
				"value": 0.6,
				"color": "#d6f5d6"
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
			"fontSize": 15
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0,
			"fontSize": 12
		},
		"value": {
			"color": "#adadad",
			"fontSize": 13
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
			"speed": 300,
            "size": 14
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	}
});
