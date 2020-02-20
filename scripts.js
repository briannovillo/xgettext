<div>{ `${i18n.gettext('This text is recognized because has backticks')}` }</div>
<script>
//Usage of ${} inside scripts breaks the parser

window.someProp = ${console.log("some text")};
</script>
<div>{ i18n.gettext('Parser recognize only one text')}</div>
