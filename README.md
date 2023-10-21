# Tip Tap Text Editor Component

![Screen Shot 2023-10-21 at 21 30 11](https://github.com/mahmoud-bebars/Tiptap_Editor_Component/assets/66588352/b7f73c66-7e10-4aa6-bec8-06febefc38ac)

 With The Help Of TipTap This is A ready Use Component with the Ablity To Customuize Apperance & Editor Actions

## Refrance 

- For Devlopment ReactJS is Used
- Styled In TailwindCSS for Better Usage
- The Core Editor Functinallity Is Powered With TipTap Library


## The Project Sturcture Is ieasy to Clone & Build on Top ast A reuabable Component

```
      <Editor
            content={editorContent} // Passing the UseState to The Editor 
            setContent={setEditorContent} // Passing setState to Editor
      />
      <button
        onClick={() => console.log(editorContent)} // Any Action to be Taken with the editor Data will Be out Of teh Component Like Console it
      >
        console content
      </button>
```


### Quick Tip:- 
For View The Data in the Page As It's is an HTML data Not Text so it will be Diffrent

```
 <div dangerouslySetInnerHTML={{ __html: /* data will be Added here as it's HTML data */ }} />
```

### An Other Tip For Implenmenting :-

Editor's Data is Better to be Hold IN a private State Not inside Object state



## Available Scripts in the project For Testing (After Installing Packages `npm install` :

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Resources Used in The Project :

- [ReactJs](https://www.react.dev)
- [Tiptap](https://www.tiptap.dev)
- [TailwindCss](https://www.tailwindcss.com)
