module.exports = [
    {
        title: 'fgsfds',
        body: '## WELCOME TO FGSFDS NOTES\n' +
        `### (This is most of the readme, but does not have the images)\n` +
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
          '~~All~~ *Most* of the basic functionality of the app is here. It also has some fancy stuff in the form of **HTMX** and **markdown-it**.\n' +
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
          'The second thing that was hard is the search function. It seems to be really difficult to parse user queries out of a search bar and into mongoose in any meaningful way without a lot of tinkering and effort. The search only works right now if the user searches for the *entire* body string in full. Which is great if you have a note that says just *asdf* but not so good if you wanna search for anything more complex than that.\n' +
          '\n' +
          "The third thing is the way that clicking the greyed out area clears the notes. It's still querying the server and receiving a res.send() with nothing in it, but it was the only way I could run the innerHTML that would work and just clear out the div. I tried using a click listener and it wouldn't work\n" +
          '\n' +
          'Another thing, I left routes that are unused in the controller/routes files because why not? There is also a new view called **results** that displays search results. More HTMX.',
      },
    {
        "title": "As the prophecy foretold",
        "body": "Dreamcatcher yuccie pickled humblebrag hexagon tote bag pok pok pabst keytar portland godard enamel pin. Fanny pack wayfarers pork belly, affogato typewriter PBR&B health goth single-origin coffee brunch gastropub. Venmo +1 godard hashtag asymmetrical hell of coloring book activated charcoal quinoa pok pok photo booth vape. Cliche tbh cardigan fashion axe, iPhone twee gochujang selfies four dollar toast +1 pork belly yr etsy helvetica."
    },
    {
        "title": "Three raccons in a trenchcoat",
        "body": "Kale chips lo-fi live-edge edison bulb whatever adaptogen single-origin coffee snackwave meh seitan organic chicharrones 8-bit cardigan. Marfa sriracha lo-fi shoreditch, bitters keffiyeh tattooed intelligentsia typewriter four dollar toast seitan meggings. Paleo distillery cliche tilde, viral salvia tote bag vegan jianbing meditation. Chillwave ugh cold-pressed quinoa."
    },
    {
        "title": "Strange hill to die on",
        "body": "Franzen echo park next level vice, enamel pin keffiyeh heirloom chartreuse raw denim. Viral hella man braid skateboard, bespoke prism before they sold out. Ennui prism woke, chartreuse cronut pork belly cred hell of. Austin XOXO lumbersexual shaman raw denim, chillwave cliche hella shabby chic thundercats."
    },

    {
        "title": "Elongated Muskrat",
        "body": "Cliche irony activated charcoal subway tile kitsch etsy. Direct trade vaporware blog, you probably haven't heard of them XOXO health goth polaroid wayfarers. Adaptogen asymmetrical photo booth neutra meggings kinfolk before they sold out edison bulb salvia disrupt. Blog photo booth helvetica, godard fingerstache pug af gentrify tilde typewriter fixie chillwave normcore twee polaroid. Copper mug yr VHS hexagon leggings subway tile. Authentic pabst art party, slow-carb shaman vinyl post-ironic etsy artisan."
    },
    {
        "title": "Unfathomably Based",
        "body": "Tbh keffiyeh bicycle rights, venmo unicorn sriracha tumeric art party synth shabby chic swag small batch normcore meggings. Echo park lumbersexual twee hell of copper mug palo santo blog. Letterpress cardigan tofu, raclette leggings organic fam +1. Trust fund photo booth asymmetrical biodiesel dreamcatcher taxidermy. Meggings normcore kogi copper mug."
    },
    {
        "title": "Lets goooooooo",
        "body": "I'm baby blue bottle squid dreamcatcher pinterest af. Hot chicken XOXO you probably haven't heard of them tousled, subway tile lo-fi artisan tofu. Lyft tbh scenester kickstarter poutine keffiyeh banjo 3 wolf moon YOLO chillwave vegan. Copper mug gentrify selvage, jianbing iPhone art party flexitarian succulents tattooed raclette."
    },
    {
        "title": "And here we go again",
        "body": "Freegan offal lomo tilde cold-pressed 8-bit drinking vinegar lo-fi lumbersexual glossier banjo put a bird on it cred brooklyn. Jianbing thundercats skateboard drinking vinegar photo booth ennui franzen enamel pin williamsburg lyft. Swag vice flexitarian kitsch kogi chicharrones. Four loko PBR&B marfa enamel pin scenester offal sustainable pickled butcher mustache asymmetrical craft beer edison bulb. Typewriter mlkshk knausgaard echo park kogi sartorial taxidermy sriracha. Mumblecore jean shorts kogi fashion axe kinfolk, brooklyn flexitarian poutine williamsburg yuccie tumblr umami taxidermy direct trade."
    },
]