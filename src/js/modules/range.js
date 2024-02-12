function range() {
    let inputFromPrice = document.querySelector("[data-range='price-from']");
    let inputToPrice = document.querySelector("[data-range='price-to']");

    let inputFromMaxLenght = document.querySelector("[data-range='max-length-from']");
    let inputToMaxLenght = document.querySelector("[data-range='max-length-to']");

    let inputFromMinLenght = document.querySelector("[data-range='min-length-from']");
    let inputToMinLenght = document.querySelector("[data-range='min-length-to']");

    let inputFromWidth = document.querySelector("[data-range='width-from']");
    let inputToWidth = document.querySelector("[data-range='width-to']");

    $(document).ready(function() {
        $(".range-price").ionRangeSlider({
            type: "double",
            min: 0,
            max: 20000,
            from: 0,
            to: 5000,
            drag_interval: true,
            onFinish: function (data) {
                let dataFrom = data.from;
                let dataTo = data.to;

                inputFromPrice.value = dataFrom;
                inputToPrice.value = dataTo;
            },
        });
        $(".range-max-length").ionRangeSlider({
            type: "double",
            min: 0,
            max: 25,
            from: 0,
            to: 25,
            drag_interval: true,
            onFinish: function (data) {
                let dataFrom = data.from;
                let dataTo = data.to;

                inputFromMaxLenght.value = dataFrom;
                inputToMaxLenght.value = dataTo;
            },
        });
        $(".range-min-length").ionRangeSlider({
            type: "double",
            min: 0,
            max: 25,
            from: 0,
            to: 25,
            drag_interval: true,
            onFinish: function (data) {
                let dataFrom = data.from;
                let dataTo = data.to;

                inputFromMinLenght.value = dataFrom;
                inputToMinLenght.value = dataTo;
            },
        });
        $(".range-width").ionRangeSlider({
            type: "double",
            min: 0,
            max: 15,
            from: 0,
            to: 15,
            drag_interval: true,
            onFinish: function (data) {
                let dataFrom = data.from;
                let dataTo = data.to;

                inputFromWidth.value = dataFrom;
                inputToWidth.value = dataTo;
            },
        });

        function rangeValue(inputFrom,inputTo,rangeTeg){
            var instance = $(rangeTeg).data("ionRangeSlider");
            inputFrom.addEventListener("change", function() {
                var valFrom = inputFrom.value
                instance.update({
                from: valFrom,
                });
            })
            inputTo.addEventListener("change", function() {
                var valTo = inputTo.value
                instance.update({
                  to: valTo,
                });
            })
        }
        rangeValue(inputFromPrice,inputToPrice,".range-price");
        rangeValue(inputFromMaxLenght,inputToMaxLenght,".range-max-length");
        rangeValue(inputFromMinLenght,inputToMinLenght,".range-min-length");
        rangeValue(inputFromWidth,inputToWidth,".range-width");
    })
}

export default range;

