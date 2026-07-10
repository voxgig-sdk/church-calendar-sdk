// Typed models for the ChurchCalendar SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Calendar is the typed data model for the calendar entity.
type Calendar struct {
	Colour *string `json:"colour,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Rank *string `json:"rank,omitempty"`
	RankNum *float64 `json:"rank_num,omitempty"`
	System *string `json:"system,omitempty"`
	Title *string `json:"title,omitempty"`
}

// CalendarListMatch is the typed request payload for Calendar.ListTyped.
type CalendarListMatch struct {
	Calendar *string `json:"calendar,omitempty"`
	Day *int `json:"day,omitempty"`
	Month *int `json:"month,omitempty"`
	Year *int `json:"year,omitempty"`
	Locale *string `json:"locale,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
