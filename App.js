import React from 'react';
import ReactDOM from 'react-dom/client';

const HeaderComponent = () => {
    return <div className="header">
        {/* // logo */}
        <div className='logo'>
            <img src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf='></img>
        </div>

        {/* // nav items */}
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

const Restaurant = (props) => {
    const { item } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = item?.info;

    return (
        <div className="restaurant">
            <img
                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}>
            </img>
            <h3 className='name'>{name}</h3>
            <h4 className='cuisines'>{cuisines.join(',  ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString} ETA</h4>
        </div>
    )
}

const Body = () => {
    const restaurants = [
        {
            "info": {
                "id": "691784",
                "name": "Raghuvir Rajapeth",
                "cloudinaryImageId": "b5afbdbed076d75ba4554cba2aad5392",
                "locality": "Badnera Road",
                "areaName": "Maltekdi",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Sweets",
                    "Bakery",
                    "Desserts",
                    "Fast Food",
                    "Snacks",
                    "Maharashtrian"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "691784",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 600
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 600
                },
                "parentId": "457327",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 18,
                    "lastMileTravel": 1.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "18 mins",
                    "lastMileTravelString": "1.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-28 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹50 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-e2b16444-8016-43f2-825b-aa63485c622b"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/raghuvir-rajapeth-badnera-road-maltekdi-amravati-691784",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "220302",
                "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                "cloudinaryImageId": "oqjrrcyhmcvt2rnzzp1j",
                "locality": "Shrikrishna Peth",
                "areaName": "Ambapeth",
                "costForTwo": "₹100 for two",
                "cuisines": [
                    "Desserts",
                    "Ice Cream",
                    "Ice Cream Cakes"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "220302",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 600
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 600
                },
                "parentId": "582",
                "avgRatingString": "4.4",
                "totalRatingsString": "500+",
                "sla": {
                    "deliveryTime": 14,
                    "lastMileTravel": 1.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "14 mins",
                    "lastMileTravelString": "1.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-28 23:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-e2b16444-8016-43f2-825b-aa63485c622b"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-shrikrishna-peth-ambapeth-amravati-220302",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "110887",
                "name": "New Eagle Restaurant",
                "cloudinaryImageId": "gn2qajmeazmfcyuycfxa",
                "locality": "Nai Basti",
                "areaName": "Maltekdi",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "Maharashtrian",
                    "South Indian",
                    "Thalis",
                    "Chinese",
                    "Biryani"
                ],
                "avgRating": 3.9,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "110887",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 600
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 600
                },
                "parentId": "146434",
                "avgRatingString": "3.9",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 21,
                    "lastMileTravel": 1.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "21 mins",
                    "lastMileTravelString": "1.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-28 23:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-e2b16444-8016-43f2-825b-aa63485c622b"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/new-eagle-restaurant-nai-basti-maltekdi-amravati-110887",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "691773",
                "name": "R Fast Food by Raghuvir",
                "cloudinaryImageId": "bf26f9268f2d02a03ca27ca9b53eeae1",
                "locality": "Badnera road",
                "areaName": "Maltekdi",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Sweets",
                    "Fast Food",
                    "Snacks",
                    "Maharashtrian",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "691773",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 600
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 600
                },
                "parentId": "457326",
                "avgRatingString": "4.1",
                "totalRatingsString": "20+",
                "sla": {
                    "deliveryTime": 17,
                    "lastMileTravel": 1.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "17 mins",
                    "lastMileTravelString": "1.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-28 22:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-e2b16444-8016-43f2-825b-aa63485c622b"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/r-fast-food-by-raghuvir-badnera-road-maltekdi-amravati-691773",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "603113",
                "name": "UBQ by Barbeque Nation",
                "cloudinaryImageId": "m5fghowhjqkjrd3fvzy2",
                "locality": "Badnera Road",
                "areaName": "Gopal Nagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "Barbecue",
                    "Biryani",
                    "Kebabs",
                    "Mughlai",
                    "Desserts"
                ],
                "avgRating": 3.3,
                "feeDetails": {
                    "restaurantId": "603113",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 1100
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 1100
                },
                "parentId": "10804",
                "avgRatingString": "3.3",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 4.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30 mins",
                    "lastMileTravelString": "4.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-28 23:30:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-e2b16444-8016-43f2-825b-aa63485c622b"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-badnera-road-gopal-nagar-amravati-603113",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "618869",
                "name": "Burger King",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Tapadia City Center",
                "areaName": "Amravati",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "American"
                ],
                "avgRating": 3.9,
                "feeDetails": {
                    "restaurantId": "618869",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 1100
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 1100
                },
                "parentId": "166",
                "avgRatingString": "3.9",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 4.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "34 mins",
                    "lastMileTravelString": "4.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-29 01:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-e2b16444-8016-43f2-825b-aa63485c622b"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/burger-king-tapadia-city-center-amravati-amravati-618869",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
    ];
    return (
        <div className="body">
            <div className="search-container">
                <input type="text"></input>
                <button>Search</button>
            </div>
            <div className="restaurant-container">
                {restaurants.map((res) => <Restaurant key={res.info.id} item={res} />)}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            {/* // header */}
            <HeaderComponent />
            {/* // body */}
            <Body />
            {/* // footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);