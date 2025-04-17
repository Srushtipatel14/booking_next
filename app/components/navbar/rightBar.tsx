import { Offcanvas } from "react-bootstrap";
import { useRouter } from 'next/navigation';
interface RightBarprops{
    canvasshow:boolean,
    setCanvasShow:(value:boolean)=>void
}
const RightBar:React.FC<RightBarprops> = ({canvasshow,setCanvasShow}) => {
     const router = useRouter();
    return (
        <Offcanvas
            show={canvasshow}
            onHide={() => setCanvasShow(false)}
            placement="end"
        >
            <div className="d-flex justify-content-between align-items-center px-3 py-2">
                <div>
                    <p className="fs-3 fw-bold m-0">Hey!</p>
                    <span style={{ fontSize: "14px", cursor: "pointer" }} onClick={() => {
                        setCanvasShow(false);
                        router.push("/user/editprofile")
                    }}>Edit Profile</span>
                </div>
                <div> <img
                    src="/user.png"
                    alt="user"
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                    }}
                /></div>
            </div>
        </Offcanvas>
    )
}

export default RightBar;