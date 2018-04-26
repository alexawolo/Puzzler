// view
var app = function(app) {

    app.View = function(model, layoutManager) {

        var v = this;
        zog(model.colors);

        var page1 = v.page1 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page1);
        var logo = new Label("Puzzler", 40, "funny").center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page1);
        // put intro screen
        var instructions = new Label({text:"Complete the puzzle\nto reveal the hidden\nimage!", align:"center", font:"funny"}).center(content);

        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.tabs1 = new Tabs({
            tabs:["Help", "Game"], color:"black", rollColor:"black", offColor:"black"
        }).addTo(page1);

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout1 = v.layout1 = new Layout(page1,[
            {object:header, marginTop:2, backgroundColor:"white"},
            {object:content, marginTop:2, backgroundColor:"white"},
            {object:footer, marginTop:2, maxWidth:70, minHeight:10}
        ], 5, "white", null, new Shape(), stage);
        layoutManager.add(layout1);




        // PAGE 2

        var page2 = v.page2 = new Container();

        // ~~~~~~~  HEADER ~~~~~~~~~~~
        var header = new Container(500,100).addTo(page2);
        var logo = new Label("Puzzler", 40, "funny").center(header);


        // ~~~~~~~  CONTENT ~~~~~~~~~~~
        var content = new Container(500,500).addTo(page2);
        // var circle = v.circle = new Circle(100, model.colors[0])
        //     .center(content)
        //     .cur();
        // circle.drag();

        // PLACEHOLDER ROW 1
        var y = -135;
        for (i=0;i<4;i++) {

          var x = 130;
          var y = y+90;

          var placeholder = new Rectangle(120,90,"white", "grey")
            .center(content)
            .pos(x,y);
        }

        // PLACEHOLDER ROW 2
        var y = -135;
        for (i=0;i<4;i++) {

          var x = 250;
          var y = y+90;

          var placeholder = new Rectangle(120,90,"white", "grey")
            .center(content)
            .pos(x,y);
        }

        var pieces = ["piece1.png", "piece3.png", "piece5.png", "piece2.png", "piece4.png", "piece8.png", "piece6.png", "piece7.png"];

        loop(pieces, function(piece) {
          var piece = frame.asset(piece)
            .addTo(content)
            .sca(.4)
            .pos(190,350)
            .drag();
        });

        // ~~~~~~~  FOOTER ~~~~~~~~~~~
        var footer = v.tabs2 = new Tabs({
            tabs:["Help", "Game"], color:"black", rollColor:"black", offColor:"black"
        }).addTo(page2);
        footer.selectedIndex = 1;

        // ~~~~~~~  LAYOUT ~~~~~~~~~~~

        var layout2 = v.layout2 = new Layout(page2,[
            {object:header, marginTop:2, backgroundColor:"white"},
            {object:content, marginTop:2},
            {object:footer, marginTop:2, maxWidth:70, minHeight:10}
        ], 5, "white", null, new Shape(), stage);
        layoutManager.add(layout2);


    }

    return app;
}(app || {});
