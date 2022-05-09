const getters={
    GET_MENU:(state:any)=>state.login.sidebarMenu,
    GET_CURRENTMENU:(state:any)=>state.login.currentMenu,
    getCrumbList:(state:any)=>state.login.crumbList,
    getIsSidebarNavCollapse:(state:any)=>state.login.isSidebarNavCollapse,
    permissionList: (state:any) => state.login.permissionList,
}
export default getters