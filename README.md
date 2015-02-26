# jQuery-SimpleAccordion

### Instructions:

1.  Include your favorite jQuery library
2.  Then include this plugin _jquery.simpleAccordion.js_
3.  Inicialize-it when the DOM is ready:

```javascript
$(document).ready(function(){
  $('#id_element').simpleAccordion();
});
```

###Settings:

**header**: _"selector"_ (any **tag**, **class** or **id** that will fire the event; default is **dt**)

**collapsable**: _"selector"_ (same as above; default is **dd**)
**speed**: _integer_ (a **integer** in milliseconds, "**slow**", "**normal**", "**fast**" as well; default is **fast**)

Your HTML markup must be like this:

``` html
<dl id="id_element">
  <dt>Element header</dl>
  <dd>Element collapsable</dd>
</dl>
````
