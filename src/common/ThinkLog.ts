var log = {
    info: function(arg: any){
        try {
            throw new Error();
        } catch (e) {
            var loc= e.stack.replace(/Error\n/).split(/\n/)[1].replace(/^\s+|\s+$/, "");
            console.info("Location: "+loc+"");
        }
    }
};