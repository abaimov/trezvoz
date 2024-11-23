
import {Metadata} from "next";
import Politica from "@/app/politica/politica";

export const metadata: Metadata = {
    title: "🚗 Трезвый водитель Минск: Политика конфиденциальности",
    description:
        "Подробная политика конфиденциальности сайта Trezvy, касающаяся сбора, использования и защиты персональных данных. Ознакомьтесь с мерами безопасности, условиями обработки и сохранности вашей информации.",
};

export default function Page() {
    return <Politica/>
}
