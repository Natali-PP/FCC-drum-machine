import React from 'react';



const Editor = (props) => {
        const initialState = '# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n#### Created by:\n[Jay Karlsven](https://jpkarlsven.com \"Jay Karlsven\'s Website\")'
        const [md, setMd] = useState(initialState)

        function updatePreview(e){
            setMd(e.target.value)
        }
        return(
        <div>
            <p>Probando</p>
            <textarea name="" id="editor" cols="30" rows="10" value={md} onChange={updatePreview}></textarea>
            
        </div>
    )
}

export default Editor;