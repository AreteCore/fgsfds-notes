module.exports = [
    {
        title: 'fgsfds',
        body:
            '![obama](https://github.com/AreteCore/fgsfds-notes/raw/main/img/obama.png)\n' +
            '## WELCOME TO FGSFDS NOTES\n' +
            `### (This is most of the [readme](https://github.com/AreteCore/fgsfds-notes/blob/main/README.md), but does not have the images)\n` +
            `#### It's pronounced "figgis-fiddis"\n` +
            '### Description:\n' +
            '*fgsfds is a notetaking app similar to Google Keep in its functionality.*\n' +
            '\n' +
            'It is a fullstack CRUD app that connects to MongoDB.\n' +
            '\n' +
            '### Technologies Used:\n' +
            '- HTML/CSS/JavaScript\n' +
            '- MongoDB\n' +
            '- **In Node:**\n' +
            '    - express\n' +
            '    - EJS\n' +
            '    - mongoose\n' +
            '    - dotenv\n' +
            '    - morgan\n' +
            '    - method-override\n' +
            '    - markdown-it\n' +
            '    - HTMX\n' +
            '    - nodemon (dev)\n' +
            '\n' +
            'The basic functionality of the app is all here. It also has some fancy stuff in the form of **HTMX** and **markdown-it**.\n' +
            '\n' +
            `I didn't have to utilize all of the "traditional" routes simply because the functionality that I wanted does not require them. I shall explain below:\n` +
            '\n' +
            '### 1. Index + Show\n' +
            'The **index** page is also the **show** page. Why?\n' +
            "Because we don't need a show page when you can see the entire note right here. It's a note taking app. Simplicity is key or it will scare users away.\n" +
            '\n' +
            '### 2. Create note\n' +
            "You can **create** a note by clicking the + sign at the top left of the index page. This uses HTMX to bring up a blank note where you can type most anything. It is fantastic. If you decide you don't want to create a note, you can click on the greyed out area and it will **discard** your new note.\n" +
            '\n' +
            '### 3. Editing notes\n' +
            'You can click on a note to **edit**. At the top, there is a **delete** button. It will confirm with you if you click it before it deletes. This is all done with HTMX. Big ups to HTMX. If you want to cancel your edit, you can click the greyed out area on the outside of the note you are editing and it will **discard** changes.\n' +
            '\n' +
            "### 4. Stuff that didn't work/stuff I didn't like\n" +
            "The biggest thing that didn't work is the masonry layout I originally wanted as drawn in Wireframe #2. It's really hard to do it and the new standard is really only supported in Firefox right now. Google Keep *does* accomplish the masonry layout in multiple browsers but I haven't the slightest idea how. I think it's probably easier in React or something but we aren't there yet.\n" +
            '\n' +
            `The second thing is the way that clicking the greyed out area clears the notes. It's still querying the server and receiving a res.send() with nothing in it so HTMX can use it's swap function, but it was the only way I could run the innerHTML that would work and just clear out the div. I tried using a click listener and it wouldn't work.\n` +
            '\n' +
            'Another thing, I left the unused show route in the controller/routes files because why not? There is also a new view called **results** that displays search results. More HTMX.',
    },
    {
        "title": "Skyline to the Sea",
        "body": "### I really want to do the Skyline to the Sea hike in Santa Cruz, CA\n\n" +
            "![Skyline to the Sea Photo](https://cdn2.apstatic.com/photos/hike/7060349_medium_1562708063.jpg)"
    },
    {
        "title": "Muenster, by far",
        "body": "Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut. Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese."
    },
    {
        "title": "Elongated Muskrat",
        "body": "As the prophecy foretold, Cliche irony activated charcoal subway tile kitsch etsy. Direct trade vaporware blog, you probably haven't heard of them XOXO health goth polaroid wayfarers. Adaptogen asymmetrical photo booth neutra meggings kinfolk before they sold out edison bulb salvia disrupt. Blog photo booth helvetica, godard fingerstache pug af gentrify tilde typewriter fixie chillwave normcore twee polaroid. Copper mug yr VHS hexagon leggings subway tile. Authentic pabst art party, slow-carb shaman vinyl post-ironic etsy artisan."
    },
    {
        "title": "Unfathomably Based",
        "body": "I’m sure many of you have been hearing rumours lately — about me, about the future of this firm, and that’s what I’d like to talk to you about today. Five years ago when I started Stratton with Donnie Azoff, I knew the day would eventually come when I’d be moving on. It’s truly with a heavy heart that I tell you that day is here. Thank you for that and for your years of incredible loyalty and admiration. The point is though, that under Donnie’s leadership, along with Robbie Feinberg and Nicky Koskoff moving into key management positions, this place is gonna be better than ever! And the fact that I’m gone won’t stop me from giving Donnie advice, not that he needs any… Before I go, there’s something I want to remind you all, and that’s this – Stratton Oakmont is bigger than any one person, even me. Especially me. You guys are Stratton, each and every one of you, and that is why it’s sure to remain the best brokerage firm in the f****** world!"
    },
    {
        "title": "Lets goooooooo",
        "body": "BUY CUMDOGELON COIN NAOO Although Dash serves lots of shilling, Pajeet could be lots of oracle of few raiden network, but because Bitcoin Cash expected a hot 51% attack in some token, Ravencoin stacks many efficient algorithm after many oracle! SHA 256 stacks a whitepaper, for someone counted lots of minimum gas! Digitex Futures data mining few hyperledger! Bitcoin specialises in a efficient FOMO when Mt. Gox was many algorithm in some bag. Golem thinking the soft fork of a on-ledger currency when it froze a pump and dump at many ERC721 token standard."
    },
    {
        "title": "HODOR",
        "body": "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor..."
    },
]