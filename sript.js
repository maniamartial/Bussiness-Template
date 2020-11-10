//creating a slider of taffs in a website using javascript
jQuery(document).ready(function()  {
    "use strict"

    $('#slider-corousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:
        {
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:
        {
            container".slider-pager"
            pageAnchorBuilder:false
        }
    });
})
