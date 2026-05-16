package = "voxgig-sdk-world-bank-data"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/world-bank-data-sdk.git"
}
description = {
  summary = "WorldBankData SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["world-bank-data_sdk"] = "world-bank-data_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
