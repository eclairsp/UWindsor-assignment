const BettysArtStore = {
    data() {
        return {
            products: [
                {
                    name: "Canvas",
                    cost: 80,
                    description:
                        "14' x 18' Cotton Medium Grain Board Canvas (Set of 1)",
                    imageAlt: "Canvas",
                    image:
                        "https://via.placeholder.com/400?text=Betty's+Art+Blog+Product",
                },
                {
                    name: "Winsor Oil Colour",
                    cost: 80,
                    description:
                        "Tube of 37 ML - Charcoal Grey (142)  (Set of 1, Charcoal Grey)",
                    imageAlt: "Winsor & Newton Artists' Oil Colour",
                    image:
                        "https://via.placeholder.com/400?text=Betty's+Art+Blog+Product",
                },
                {
                    name: "Chalk Paint 450ml",
                    cost: 80,
                    description: "Charcoal  (Set of 1, Charcoal)",
                    imageAlt: "Chalk Paint 450ml",
                    image:
                        "https://via.placeholder.com/400?text=Betty's+Art+Blog+Product",
                },
            ],
        };
    },
};

Vue.createApp(BettysArtStore).mount("#betty-art-store");
