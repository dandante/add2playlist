// First, go to https://music.amazon.com/my/songs


// This will select the first 100 songs:


$(".checkbox").each(function(index) { $(this).click(); });

// click the 'add to playlist' button:

$("[href='#option/addTo=playlist']").click();



// click the "all" playlist:



$("a[href*='title=all']").click();



// How do we scroll so we can select more songs?
// Do we want to deselect currently selected songs first?


// see if checkboxes are checked:
$(".checkbox").each(function(index) { console.log(index + " checked? " + $(this).prop("checked") ) });
