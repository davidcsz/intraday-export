function formatDate(yr, mo, da) {
    yr = yr.toString();
    mo = mo.toString();
    da = da.toString();

    if(mo.length < 2) {
        mo = '0' + mo;
    }
    if(da.length < 2) {
        da = '0' + da;
    }

    var date = yr + '-' + mo + '-' + da;
    return date;
}
