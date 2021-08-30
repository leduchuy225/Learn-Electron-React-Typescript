const electron = window.require("electron");
const remote = electron.remote;
const { dialog } = remote;

export const dialogService = dialog;
