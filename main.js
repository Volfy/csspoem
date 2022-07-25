const landscape_warning = document.querySelector("#landscape-warning");

const check_ratio = () => {
    if (window.innerWidth < window.innerHeight) {
        landscape_warning.style.cssText = "display: block; position: sticky; top: 150px;";
    } else {
        landscape_warning.style.cssText = "display: none";
    }
}
check_ratio();
window.onresize = check_ratio;