export class giaovien{
          ID_Teacher: string  ;
          ID_Subject: Int16Array  ;
          ID_Position: Int16Array  ;
          ID_Ranks: Int16Array  ;
          ID_Wage: Int16Array  ;
          First_Name: string  ;
          Last_Name: string  ;
          Name_Teacher: string  ;
          Image_Teacher?: string  ;
          Gende_Teacher: boolean  ;
          Phone__Teacher?: string  ;
          Email_Teacher?: string  ;
          DateBirth_Teacher?: Date  ;
          Address_Teacher?: string  ;
          CurrentAddress_Teacher?: string  ;
          Nation_Teacher: string  ;
          Religion_Teacher?: string  ;
          Level_Teacher?: string  ;
          Experience_Teacher?: string  ;
          IdentityCard_Teacher?: string  ;
          DateRange_Teacher?: Date  ;
          IssuedBy_Teacher?: string  ;
          DayAdim_Teacher?: Date  ;
          AddressAdmin_Teacher?: string  ;
          status?: Int16Array  ;
          DP1?: Int16Array  ;
          DP2?: Int16Array  ;
    }
    export class khoa{
         ID_Faculty: Int16Array  ;
         Name_Faculty: string  ;
         Address_Faculty: string  ;
         Learder_Faculty ?: string  ;
         Website_Facuty ?: string  ;
    }
    export class BoMon{
         ID_Subject: Int16Array  ;
        ID_Faculty: Int16Array  ;
         Name_Subject: string  ;
         Address_Subject ?: string  ;
         Phone_Subject ?: string  ;
         Leader ?: string  ;
         Leader_Assis ?: string  ;
    }
    export class ChucVu{
        ID_Position: Int16Array  ;
        ID_Faculty: Int16Array  ;
        Name_Position: string  ;
        Cent_Position: Int16Array  ;
        Note_Position ?: string  ;
        Respon_Position ?: string;

    }
    export class TrinhDo{
           ID_Academic: Int16Array  ;
           ID_Teacher: string  ;
           Name_Academic: Int16Array  ;
           YearGredu_Academic?: Date  ;
           Certificate_Academic: string  ;
           Specialy__Academic: string  ;
           UnitWork_Academic?: string  ;
           LevelIT_Academic?: string  ;
           LevelLag_Academic?: string  ;
           YeasTeaching_Academic?: string  ;
           status ?: Int16Array  ;
           DP1 ?: string  ;
           DP2 ?: string  ;
    }
    export class NgachCongChuc{
         ID_Ranks: Int16Array  ;
         Code_Ranks: string  ;
         Name_Ranks ?: string  ;
         Descript_Ranks ?: string  ;
         status ?: Int16Array  ;
         DP1 ?: string  ;
         DP2 ?: string  ;
         Note_Ranks ?: string  ;
    }
    export class BacLuong{
        ID_Wage ?: Int16Array  ;
        Name_Wage ?: string  ;
        Coeff_Wage ?: DoubleRange  ;
        status : Int16Array  ;
        Group_Wage ?: string  ;
    }
    export class HopDongLD{
          ID_Contract: Int16Array  ;
           ID_Teacher: string  ;
           Type_Contract ?: string  ;
           Since_Contract ?: Date  ;
           Come_Contract ?: Date  ;
           Note_Contract ?: string  ;
           status ?: Int16Array  ;
           DP1 ?: string  ;
           DP2 ?: string  ;
    }
    export class Luong{
         ID_Salary: Int16Array  ;
        ID_Wage: Int16Array  ;
           Wage_Salary ?: Int16Array  ;
           Basic_Salary: Int16Array  ;
           Sub_Salary ?: Int16Array  ;
           Date_Salary ?: string  ;
           DateIcre_Salary ?: Date  ;
           status ?: Int16Array  ;
           DP1 ?: string  ;
    }
    export class KhenThuongKiLuat{
           ID_DisRewards: Int16Array  ;
           ID_Teacher: string  ;
           Name_DisRewards ?: string  ;
           Reason_DisRewards ?: string  ;
           Day_DisRewards ?: Date  ;
           Form_DisRewards ?: string  ;
           Note_DisRewards ?: string  ;
           status ?: Int16Array  ;
           DP1 ?: Int16Array  ;
    }
    export class NangLuong{
         ID_Raise : Int16Array  ;
        ID_Salary : Int16Array  ;
        ID_Wage : Int16Array  ;
        CoeffOld_Raise ?: DoubleRange  ;
        CoeffNew_Raise ?: DoubleRange  ;
    }
    export class LyLichKhoaHoc{
         ID_Scientist : Int16Array  ;
           ID_Teacher : string  ;
           Name_Scientist ?: string  ;
           Type_Scientist ?: string  ;
           Link_Scientist ?: string  ;
           Note_Scientist ?: string  ;
           status ?: Int16Array  ;
           DP1 ?: string  ;
           DP2 ?: string  ;

    }
    export class MonHoc{
         ID_Sub : string  ;
           Name_Sub ?: string  ;
           Type_Sub ?: string  ;
           Number_credits_Sub ?: Int16Array  ;
          status?: Int16Array  ;
           DP1 ?: string  ;
    }
    export class DangKiGiangDay{
         ID_SignUp : Int16Array  ;
           ID_Teacher : string  ;
          ID_Sub : Int16Array  ;
           Date_SignUp ?: Date  ;
           Note_SignUp ?: string  ;
           status ?: Int16Array  ;
           DP1 ?: string  ;
           DP2 ?: string  ;
    }
    export class User{
          user_id ?: string  ;
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
