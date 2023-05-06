import Swal from "sweetalert2";

export const getButtons = async (settings) => {
  return await Swal.fire({
    title: "¿Cuántos botones quieres?",
    input: "number",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#028fcc",
    background: "#2b2b2b",
    color: "#fff",
    cancelButtonText: "Cancelar",
    inputValidator: (value) => {
      if (!value) {
        return "Debes ingresar una cantidad";
      }

      if (value < settings.winnersNumber) {
        return "No pueden haber menos botones que seleccionados";
      }
    },
  });
};

export const getWinners = async (settings) => {
  return Swal.fire({
    title: "¿Cuántos ganadores quieres?",
    input: "number",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#028fcc",
    background: "#2b2b2b",
    color: "#fff",
    cancelButtonText: "Cancelar",
    inputValidator: (value) => {
      if (!value) {
        return "Debes ingresar una cantidad";
      }

      if (value < 1) return "Debes ingresar un número mayor a 0";

      if (value > settings.buttonNumbers) {
        return "No pueden haber más ganadores que botones";
      }
    },
  });
};
