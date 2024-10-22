import React from 'react';
import { HiHome, HiUsers, HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { LiaStoreSolid } from "react-icons/lia";
import { GrServices } from "react-icons/gr";
import { LuBoxes } from "react-icons/lu";
import { RiSettings5Fill, RiRefundFill, RiLayout5Fill, RiAddBoxFill, RiApps2Fill, RiStore3Fill, RiAddLine, RiPlayListAddLine, RiListCheck, RiCalendarEventLine } from "react-icons/ri";
import { TbTargetArrow, TbShoppingCartDown, TbShoppingCartCheck, TbShoppingCartX, TbShoppingCartDollar } from "react-icons/tb";
import { IoMdPricetag, IoMdSettings, IoIosArrowDown,IoIosArrowForward, IoMdHeartEmpty, IoMdCheckboxOutline } from "react-icons/io";
import { FaInbox } from "react-icons/fa6";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { BiSolidDiscount } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { CiImageOff, CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdCheckBoxOutlineBlank, MdAdd, MdUploadFile, MdAddBox  } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function IconComponent({ name, size = '1.5em', color = 'black', className = '' }) {
    const iconsRegistration = {
        HiHome,
        AiOutlineDelete,
        IoMdSearch,
        MdDeleteOutline,
        BiSortAlt2,
        RiAddBoxFill,
        MdAddBox,
        FaRegHeart,
        MdCheckBoxOutlineBlank,
        IoMdCheckboxOutline,
        CiImageOff,
        MdAdd,
        MdUploadFile,
        IoMdHeartEmpty,
        CiHeart,
        FaInbox,
        GoDotFill,
        IoIosArrowForward,
        HiTrendingDown,
        HiTrendingUp,
        GiHamburgerMenu,
        IoMdSettings,
        IoIosArrowDown,
        BiSolidDiscount,
        BsFillFileBarGraphFill,
        IoMdPricetag,
        TbTargetArrow,
        LiaStoreSolid,
        RiStore3Fill,
        RiAddLine,
        RiPlayListAddLine,
        RiListCheck,
        RiCalendarEventLine,
        RiApps2Fill,
        RiLayout5Fill,
        RiRefundFill,
        GrServices,
        RiSettings5Fill,
        TbShoppingCartDown,
        TbShoppingCartCheck,
        TbShoppingCartX,
        LuBoxes,
        HiUsers,
        TbShoppingCartDollar
    };

    const Icon = iconsRegistration[name];

    if (!Icon) {
        console.error(`Icon '${name}' not found`);
        return null;
    }

    return <Icon size={size} color={color} className={className} />;
}

export default IconComponent;
