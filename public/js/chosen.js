// js for the dropdowns in the survey //
var config = {
    ".chosen-select": {},
    ".chosen-select-deselect": {
      allow_single_deselect: true
    },
    ".chosen-select-no-single": {
      disable_search_threshold: 10
    },
    ".chosen-select-no-results": {
      no_results_text: "No results found"
    },
    ".chosen-select-width": {
      width: "95%"
    }
  };
  
  for (var selector in config) {
    $(selector).chosen(config[selector]);
  }