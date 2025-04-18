import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axios";
import { updateUser } from "../store/slices/authSlice";




export const useProfileUpdate = ({ setUserData, setIsEditing }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const updateProfile = async (data) => {
    try {
      if (!token) {
        console.error("Токен отсутствует");
        navigate("/404");
        return;
      }

      console.log("Form data being sent:", data);

      const response = await axiosInstance.put("/api/users/profile", data);
      console.log("Server response after update:", response.data);

      if (response.status === 200) {
        const responseData = response.data;
        dispatch(updateUser(responseData));
        setUserData({
          name: responseData.name,
          phone: responseData.phone,
        });
        setIsEditing(false);
      } else {
        console.error("Ошибка при обновлении данных пользователя");
        navigate("/404");
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса на сервер:", error);
      if (error.response?.status === 404) {
        navigate("/404");
      }
    }
  };

  return updateProfile;
};
  