import { Link, useNavigate } from 'react-router-dom';
import cardStyle from './Card.module.scss';
import { FaSearch, FaTrashAlt, FaArrowLeft, FaPencilAlt } from "react-icons/fa";

const Card = ({ title, content, category, tags, user, slug, isShow }) => {

    const navigate = useNavigate();

    return (
        <div className="card text-center">
            <div className={`card-header ${cardStyle.title}`} style={{ backgroundColor: category?.color }}>
                <h2>{title}</h2>
            </div>
            <div className={`card-body ${cardStyle.body}`}>
                <p>{content}</p>
                <p>{user?.name}</p>
                <p>
                    <strong>Tags: </strong>
                    {tags?.map(tag => (
                        <span
                            className="badge rounded-pill me-2"
                            key={tag.id}
                            style={{ backgroundColor: tag.color }}
                        >{tag.label}</span>
                    ))}
                </p>

                {isShow &&
                    <p>
                        <strong>Categoria: </strong>

                        <span
                            className="badge me-2"
                            style={{ backgroundColor: category?.color }}
                        >{category?.label}</span>

                    </p>
                }

            </div>
            {isShow ?
                <div className="card-footer d-flex justify-content-between gap-3">
                    <button
                        onClick={() => { navigate(-1) }}
                        className='btn btn-secondary d-flex align-items-center gap-1'
                    >
                        <FaArrowLeft />Torna indietro
                    </button>

                    <div className='d-flex justify-content-center gap-3'>

                        <button className='btn btn-warning d-flex align-items-center gap-1'><FaPencilAlt />Modifica</button>
                        <button className='btn btn-danger d-flex align-items-center gap-1'><FaTrashAlt />Cancella</button>
                    </div>
                </div> :
                <div className="card-footer d-flex justify-content-center gap-3">
                    <Link
                        to={`/posts/${slug}`}
                        className='btn btn-primary d-flex align-items-center gap-1'>
                        <FaSearch />Vedi
                    </Link>
                </div>
            }
        </div >
    )
}

export default Card;