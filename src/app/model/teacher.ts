export class giaovien{
          iD_Teacher: string  ;
          iD_Subject: Int16Array  ;
          iD_Position: Int16Array  ;
          iD_Ranks: Int16Array  ;
          iD_Wage: Int16Array  ;
          first_Name: string  ;
          last_Name: string  ;
          name_Teacher: string  ;
          image_Teacher?: string  ;
          gende_Teacher: boolean  ;
          phone__Teacher?: string  ;
          email_Teacher?: string  ;
          dateBirth_Teacher?: Date  ;
          address_Teacher?: string  ;
          currentAddress_Teacher?: string  ;
          nation_Teacher: string  ;
          religion_Teacher?: string  ;
          level_Teacher?: string  ;
          experience_Teacher?: string  ;
          iDentityCard_Teacher?: string  ;
          dateRange_Teacher?: Date  ;
          issuedBy_Teacher?: string  ;
          dayAdim_Teacher?: Date  ;
          addressAdmin_Teacher?: string  ;
          status?: Int16Array  ;
          dP1?: Int16Array  ;
          dP2?: Int16Array  ;
    }
    export class khoa{
         iD_Faculty: Int16Array  ;
         name_Faculty: string  ;
         address_Faculty: string  ;
         learder_Faculty ?: string  ;
         website_Facuty ?: string  ;
    }
    export class BoMon{
         iD_Subject: Int16Array  ;
        iD_Faculty: Int16Array  ;
         name_Subject: string  ;
         address_Subject ?: string  ;
         phone_Subject ?: string  ;
         leader ?: string  ;
         leader_Assis ?: string  ;
    }
    export class ChucVu{
        iD_Position: Int16Array  ;
        iD_Faculty: Int16Array  ;
        name_Position: string  ;
        cent_Position: Int16Array  ;
        note_Position ?: string  ;
        respon_Position ?: string;

    }
    export class TrinhDo{
           iD_Academic: Int16Array  ;
           iD_Teacher: string  ;
           name_Academic: Int16Array  ;
           yearGredu_Academic?: Date  ;
           certificate_Academic: string  ;
           specialy__Academic: string  ;
           unitWork_Academic?: string  ;
           levelIT_Academic?: string  ;
           levelLag_Academic?: string  ;
           yeasTeaching_Academic?: string  ;
           status ?: Int16Array  ;
           dP1 ?: string  ;
           dP2 ?: string  ;
    }
    export class NgachCongChuc{
         iD_Ranks: Int16Array  ;
         code_Ranks: string  ;
         name_Ranks ?: string  ;
         descript_Ranks ?: string  ;
         status ?: Int16Array  ;
         dP1 ?: string  ;
         dP2 ?: string  ;
         note_Ranks ?: string  ;
    }
    export class BacLuong{
        iD_Wage ?: Int16Array  ;
        name_Wage ?: string  ;
        coeff_Wage ?: DoubleRange  ;
        status : Int16Array  ;
        group_Wage ?: string  ;
    }
    export class HopDongLD{
          iD_Contract: Int16Array  ;
           iD_Teacher: string  ;
           type_Contract ?: string  ;
           since_Contract ?: Date  ;
           come_Contract ?: Date  ;
           note_Contract ?: string  ;
           status ?: Int16Array  ;
           dP1 ?: string  ;
           dP2 ?: string  ;
    }
    export class Luong{
         iD_Salary: Int16Array  ;
        iD_Wage: Int16Array  ;
           wage_Salary ?: Int16Array  ;
           basic_Salary: Int16Array  ;
           sub_Salary ?: Int16Array  ;
           date_Salary ?: string  ;
           dateIcre_Salary ?: Date  ;
           status ?: Int16Array  ;
           dP1 ?: string  ;
    }
    export class KhenThuongKiLuat{
           iD_DisRewards: Int16Array  ;
           iD_Teacher: string  ;
           name_DisRewards ?: string  ;
           reason_DisRewards ?: string  ;
           day_DisRewards ?: Date  ;
           form_DisRewards ?: string  ;
           note_DisRewards ?: string  ;
           status ?: Int16Array  ;
           dP1 ?: Int16Array  ;
    }
    export class NangLuong{
         iD_Raise : Int16Array  ;
        iD_Salary : Int16Array  ;
        iD_Wage : Int16Array  ;
        coeffOld_Raise ?: DoubleRange  ;
        coeffNew_Raise ?: DoubleRange  ;
    }
    export class LyLichKhoaHoc{
         iD_Scientist : Int16Array  ;
           iD_Teacher : string  ;
           name_Scientist ?: string  ;
           type_Scientist ?: string  ;
           link_Scientist ?: string  ;
           note_Scientist ?: string  ;
           status ?: Int16Array  ;
           dP1 ?: string  ;
           dP2 ?: string  ;

    }
    export class MonHoc{
         iD_Sub : string  ;
           name_Sub ?: string  ;
           type_Sub ?: string  ;
           number_credits_Sub ?: Int16Array  ;
          status?: Int16Array  ;
           dP1 ?: string  ;
    }
    export class DangKiGiangDay{
         iD_SignUp : Int16Array  ;
           iD_Teacher : string  ;
          iD_Sub : Int16Array  ;
           date_SignUp ?: Date  ;
           note_SignUp ?: string  ;
           status ?: Int16Array  ;
           dP1 ?: string  ;
           dP2 ?: string  ;
    }
    export class User{
          user_iD ?: string  ;
           hoten ?: string  ;
           ngaysinh ?: Date  ;
           diachi ?: string  ;
           gioitinh ?: string  ;
           email ?: string  ;
           taikhoan ?: string  ;
           matkhau ?: string  ;
           role ?: string  ;
           token ?: string  ;
           image_url ?: string;

    }
