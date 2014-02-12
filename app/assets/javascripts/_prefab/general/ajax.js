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
  getJsonSync: function(data,url,fieldType) {
    var query = fieldType + '=' + data;
    // TECHDEBT Add a timeout
    return pf.ajax.loadJSON(query,url);
  },
  loadJSON: function(query,url) {
    // Load json file;
    var json = JSON.parse(pf.ajax.loadTextFileAjaxSync(query, url, "application/json"));
    // Parse json
    return (json) ? json : false;
  },
  loadTextFileAjaxSync: function (query, url, mimeType) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url,false);
    if (mimeType != null) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType(mimeType);
      }
    }
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(query);
    if (xhr.status==200)
    {
      return xhr.responseText;
    }
    else {
      // TECHDEBT Throw exception
      return null;
    }
  }
};

define(['jquery','common'], function() {
});
