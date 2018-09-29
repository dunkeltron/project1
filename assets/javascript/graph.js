//Data Visualization Code Only
var pie = new d3pie("pieChart", {
    "header": {
        "title": {
            "text": "Food Options",
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
			"text": "184 Choices",
			"color": "#999999",
			"fontSize": 12,
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
                "label": "Beef", //2
                "value": 218812,
                "color": "003380"
            },
            {
                "label": "Breakfast",
                "value": 157618,
                "color": "#0047b3"
            },
            {
                "label": "Chicken",
                "value": 114384,
                "color": "#005ce6"
            },
            {
                "label": "Dessert",
                "value": 95002,
                "color": "#1a75ff"
            },
            {
                "label": "Lamb",
                "value": 36344,
                "color": "#66a3ff"
            },
            {
                "label": "Miscellaneous",
                "value": 32170,
                "color": "#80b3ff"
            },
            {
                "label": "Pasta",
                "value": 28561,
                "color": "#99c2ff"
            },
            {
                "label": "Pork", //1
                "value": 264131,
                "color": "#002966"
            },
            {
                "label": "Seafood",
                "value": 218812,
                "color": "#003d99"
            },
            {
                "label": "Side",
                "value": 157618,
                "color": "#0052cc"
            },
            {
                "label": "Starter",
                "value": 114384,
                "color": "#0066ff"
            },
            {
                "label": "Vegan",
                "value": 95002,
                "color": "#3385ff"
            },
            {
                "label": "Vegetarian",
                "value": 78327,
                "color": "#4d94ff"
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

var pie1 = new d3pie("pieChart1", {
	"header": {
		"title": {
			"text": "Area Options",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "184 Choices",
			"color": "#999999",
			"fontSize": 12,
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
