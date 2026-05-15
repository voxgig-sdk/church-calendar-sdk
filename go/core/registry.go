package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCalendarEntityFunc func(client *ChurchCalendarSDK, entopts map[string]any) ChurchCalendarEntity

