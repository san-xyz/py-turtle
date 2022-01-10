function Python(CODE){
    let SRT1 = document.createElement("script"),
        SRT2 = document.createElement("script"),
        SRT3 = document.createElement("script"),
        OPT1 = document.createElement("div"),
        ST = OPT1.style;
        ST.height = "100vh";
        ST.width = "100vw";
        ST.background = "black";
        document.body.style.margin=0;
        
    OPT1.setAttribute("id","CANVAS");
    SRT2.src = "https://cdn.rawgit.com/skulpt/skulpt-dist/0.11.0/skulpt.min.js";
    SRT3.src = "https://cdn.rawgit.com/skulpt/skulpt-dist/0.11.0/skulpt-stdlib.js";

    document.head.appendChild(SRT2);
    SRT2.onload = function() {    
        document.head.appendChild(SRT3);
    }
    document.body.appendChild(OPT1);
    function outf(TXT) { console.log(TXT) };
    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }

    function runit() {   
        Sk.pre = "output";
        Sk.configure({output:outf, read:builtinRead}); 
        (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'CANVAS';
        var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, CODE, true);
        });
        myPromise.then(function(mod) {},
            function(err) {
                console.log(err.toString());
            }
        )   
     };    
     SRT3.onload=runit;
}    
