# xgettext
## Tests for failed use cases when xgettext parse javascripts.

Run the following commands and see messages.po output file.


* Usage of {someFunction()} inside <script> http://savannah.gnu.org/bugs/?50920#comment5
```
find scripts.js | xargs xgettext -j --from-code=UTF-8 --force-po --no-wrap -ktr:1 -ktrd:1 -ktrn:1,2 -ktrnd:1,2 -o ./messages.po -LJavaScript
```


* Usage of { i18n.gettext('text') } without backticks ({ \`${i18n.gettext('text')}\` })
```
find stringLiterals.js | xargs xgettext -j --from-code=UTF-8 --force-po --no-wrap -ktr:1 -ktrd:1 -ktrn:1,2 -ktrnd:1,2 -o ./messages.po -LJavaScript
```
