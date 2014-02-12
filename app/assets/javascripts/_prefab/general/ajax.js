// WIP - Passwords with spaces

// To do later - scrollTo, dates, telephone, live validation, get specs hooked up to Rake / Rspec / PhantomJS
pf.ajax = {
  getJson: function(query,url) {
    $.ajax({
      url: url,
      data: query,
      dataType: 'json',
      success: function(result){
        return data;
      }
    });
  },
  getJsonSync: function(query,url) {
    var path = url;
    // TECHDEBT Build Quiery String
    return pf.ajax.loadJSON(path);
  },
  loadJSON: function(url) {
    // Load json file;
    var json = JSON.parse(pf.ajax.loadTextFileAjaxSync(url, "application/json"));
    // Parse json
    return (json) ? json : false;
  },
  loadTextFileAjaxSync: function (filePath, mimeType) {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",filePath,false);
    if (mimeType != null) {
      if (xmlhttp.overrideMimeType) {
        xmlhttp.overrideMimeType(mimeType);
      }
    }
    xmlhttp.send();
    if (xmlhttp.status==200)
    {
      return xmlhttp.responseText;
    }
    else {
      // TECHDEBT Throw exception
      return null;
    }
  }
};

define(['jquery','common'], function() {
});
