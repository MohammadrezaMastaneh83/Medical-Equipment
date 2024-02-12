import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import SingIn from "../Log_in/Rejestry/Rejestry";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store/MedicalStore";
import { handleClose, handleOpen,  } from "@/app/store/MedicalSlice";
import Login from "../Log_in/sin_in/Login";
export default function Header() {
  // const [open, setOpen] =React.useState(false);
//  const [showName,setShowName] = React.useState([])
const buttonInfo = useSelector((state:RootState) => state .MedicalEquipment.name)
  const count = useSelector((state: RootState) => state.MedicalEquipment.open);
  const dispatch = useDispatch();
  const userName = localStorage.getItem("userName")
  return (
    <div className={styles.header_pad}>
      <div className={styles.header_all}>
        <div className={styles.header_back}>
          <div className={styles.header_search}>
            
            <button className={styles.header_btn} onClick={()=>{
            dispatch(handleOpen())
            
            }
          }>
            <Image
              alt=""
              width={24}
              height={24}
              className={styles.header_svg}
              src="/person_FILL0_wght400_GRAD0_opsz48 (2) 1.svg"
            />
            {userName}
          </button>
            {/* <Button onClick={() => dispatch(handleOpen())}>
              Show backdrop
            </Button> */}
            <Backdrop
              onClick={() => dispatch(handleClose())}
              sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={count}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <Login/>
              </div>
            </Backdrop>
            <button className={styles.header_btntamas}>
              <Image alt="" src="/tamas110.svg" width={24} height={24} />
            </button>
          </div>

          <div className={styles.header_seicon}>
            <Image
              alt=""
              src="/Search.svg"
              width={14}
              height={14}
              className={styles.header_serchicon}
            />
          </div>
          <div className={styles.header_firstdiv}>
            <input type="text" className={styles.header_input101} />
            <Image
              width={113}
              alt=""
              height={80}
              className={styles.header_logo}
              src="/LOGO 1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
