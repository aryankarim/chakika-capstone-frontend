import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "bottom-right",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

const makeToast = (type, msg) => {
    Toast.fire({
        icon: type,
        title: msg,
    });
};

export default makeToast;