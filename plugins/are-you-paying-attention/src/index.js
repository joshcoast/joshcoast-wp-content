import "./index.scss"
// The WP Scripts we are using has made a way to recognise this import at a global level
// and automatically grab the right component. So, no need to install this component with npm.
// BUT we need to tell WordPress to load the components js file in the global scope.
// SO check out plugins/are-you-paying-attention/index.php and the wp_register_script for 'wp-element'
import {TextControl, Flex, FlexBlock, FlexItem, Button, Icon} from "@wordpress/components"


wp.blocks.registerBlockType("ourplugin/are-you-paying-attention", {
    title: "Are You Paying Attention?",
    icon: "smiley",
    category: "common",
    attributes: {
      skyColor: { type: "string" },
      grassColor: { type: "string" }
    },
    // The admin edit screen.
    edit: EditComponent,
    save: function (props) {
        return null
    }
})

// You can name this edit function anything, but in react you do want to use an
// Uppercase at the start for components.
function EditComponent (props) {
    function updateSkyColor(event) {
        props.setAttributes({skyColor: event.target.value})
    }
    function updateGrassColor(event) {
        props.setAttributes({grassColor: event.target.value})
    }

    // "<TextControl /> is a component made by WP.
    return (
        <div className="paying-attention-edit-block">
            <TextControl label='Question:'/>
            <h2>Answers:</h2>
            <Flex>
                <FlexBlock>
                    <TextControl />
                </FlexBlock>
                <FlexItem>
                    <Button>
                        <Icon className="mark-as-correct" icon="star-empty" />
                    </Button>
                </FlexItem>
                <FlexItem>
                    <Button isLink className="attention-delete">Delete</Button>
                </FlexItem>
            </Flex>
        </div>
    )
}

/*
This is the standard way. However, if you change any of the HTML and add the deprecated version, you'd have to go and re-save every post that used this block.
    save: function (props) {
        return (
            <>
                <h1>This is the front end, and it's hard coded.</h1>
                <h2>Today the sky is completely and totally {props.attributes.skyColor} and the grass is {props.attributes.grassColor}.</h2>
            </>
        )
    },
    deprecated: [{
        attributes: {
            skyColor: { type: "string" },
            grassColor: { type: "string" }
        },
        save: function (props) {
            return (
                <>
                    <h1>This is the front end and it's hard coded.</h1>
                    <h3>Today the sky is completely {props.attributes.skyColor} and the grass is {props.attributes.grassColor}.</h3>
                </>
            )
        },
    },
        {
        attributes: {
            skyColor: { type: "string" },
            grassColor: { type: "string" }
        },
        save: function (props) {
            return (
                <>
                    <h1>This is the front end and it's hard coded.</h1>
                    <p>Today the sky is {props.attributes.skyColor} and the grass is {props.attributes.grassColor}.</p>
                </>
            )
        }
    }]
})*/
