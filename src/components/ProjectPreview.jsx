import { Link } from "react-router-dom"
import { hyphenateWords } from "../utilities/ hyphenateWords";

const ProjectPreview = (props) => {
    return (
        <>
       <div>
    <img 
        src={props.image} 
        alt={props.title}
    />

    <section>
        <h3>
            {props.title}
        </h3>
        <Link title="click to learn more" to={`/projects/${hyphenateWords(props.title)}`}>
				<button>
            Learn more
        </button>
        </Link>
    </section>
</div>
        </>
    );
}

export default ProjectPreview