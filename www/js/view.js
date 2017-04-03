
var app = function(app) {

    app.makePages = function(stage, stageW, stageH, layoutManager){
        zog(layoutManager)


        var p = {};

        var page1 = p.page1 = new zim.Container(stageW, stageH);

        page1.name = "Intro Page";

        var logo = new zim.Rectangle(300,100,frame.blue)
            .addTo(stage);

        var content = new zim.Rectangle(700,600,frame.tin)
            .addTo(page1);

        var buttons = new zim.Container()
            .addTo(page1);
        var tabs = page1.tabs = new zim.Tabs({
            width:430,
            tabs:["ONE", "TWO", "THREE"]
        }).addTo(buttons);

        // LAYOUT
        // holder, regions, lastMargin, backgroundColor,
        // vertical, regionShape, scalingObject, hideKey

        var layout = new zim.Layout({
            holder:page1,
            regions:[
        {object:logo, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
        {object:content, marginTop:5, maxWidth:100, backgroundColor:frame.grey},
        {object:buttons, marginTop:5, maxWidth:100, minHeight:10,}
            ],
            lastMargin:3,
            regionShape:new zim.Shape(),
            scalingObject:stage
        });

        layoutManager.add(layout);



        //PAGE 2
        var page2 = p.page2 = new zim.Container(stageW, stageH);

        page2.name = "Second Page";


        var logo2 = page2.logo = new zim.Rectangle(300,100,frame.pink)
            .addTo(stage);

        var content2 = new zim.Rectangle(700,600,frame.tin)
            .addTo(page2);

        var buttons2 = new zim.Container()
            .addTo(page2);
        var tabs2 = page2.tabs = new zim.Tabs({
            width:430,
            tabs:["4", "5", "6"]
        }).addTo(buttons2);


        // LAYOUT
        var layout2 = new zim.Layout({
            holder:page2,
            regions:[
        {object:logo2, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
        {object:content2, marginTop:5, maxWidth:100, backgroundColor:frame.grey},
        {object:buttons2, marginTop:5, maxWidth:100, minHeight:10,}
            ],
            lastMargin:3,
            regionShape:new zim.Shape(),
            scalingObject:stage
        });

        layoutManager.add(layout2);
        return p;
    }

    return app;
}(app || {});
