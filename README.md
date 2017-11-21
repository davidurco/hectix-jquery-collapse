[![GitHub license](https://img.shields.io/github/license/Hectix/Hectix-Collapse.svg?style=social)](https://github.com/Hectix/Hectix-Collapse/blob/master/LICENSE)
![build](https://travis-ci.org/Hectix/Hectix-Collapse.svg?branch=master)
# Hectix's Collapse

[Hectix's Collapse][1] is a lightweight, jQuery dependent plugin for customizable collapses.
You can see **[demo][2]** and dig deep into it at plugin [GitHub Page][2].

## How to use it?

You can install hectixCollapse using package managers or download it [directly][3].

### npm

```
npm install hectixcollapse
```
or

### bower
```
bower install hectixcollapse
```

###Use it!

include jQuery and hectixCollapse script right before end of body tag.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="dist/hectixcollapse.min.js"></script>
```

#### HTML Structure
```html
<section class="hectixCollapse cs-hidden">
    <div class="collapse-item">
        <h1>First collapse item</h1>
        <p>This is first collapse item</p>
    </div>
    <div class="collapse-item">
        <h1>Second collapse item</h1>
        <p>This is second collapse item</p>
    </div>
    ...
    <a class="collapse-button"><span class="button-text"></span><span class="counter"></span></a>
</section>
```

> Use class `.cs-hidden` to prevent displaying collapse before execution.  
> `Section` tag is for demonstrational purposes only, you can use `div` instead!

#### Call hectixCollapse

```javascript
$("section.hectixCollapse").hectixCollapse({
    initialItems: 1,
    itemPerClick: 2,
    slideSpeed: 600,
    buttonText: "Next",
    showCounter: false
});
```


## Settings

| Name        | Expected           | Default  | Description  |
| ------------- |:-------------:| -----:| -----:|
| initialItems | number | 	1 | Numbers of elements shown on start of plugin |
| itemsPerClick | number      |   	1 | Items slided per click on button |
| slideSpeed | 	number      |    300 | Speed of slide animation |
| showCounter | boolean      |    false | Show counter in a collapse button |
| buttonText | string      |   "next" | Text displayed in a collapse button |

  

[Hectix's Collapse][1] is maintained by [Dávid Ďurčo][4].  
Think you found a bug or you have improvement idea? Use github [issue tracker][5].

MIT © **[Dávid Ďurčo][4]**

[1]: https://github.com/Hectix/Hectix-Collapse
[2]: https://hectix.github.io/Hectix-Collapse
[3]: https://github.com/Hectix/Hectix-Collapse/archive/master.zip
[4]: https://github.com/Hectix
[5]: https://github.com/Hectix/Hectix-Collapse/issues
