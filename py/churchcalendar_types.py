# Typed models for the ChurchCalendar SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Calendar:
    colour: Optional[str] = None
    description: Optional[str] = None
    name: Optional[str] = None
    rank: Optional[str] = None
    rank_num: Optional[float] = None
    system: Optional[str] = None
    title: Optional[str] = None


@dataclass
class CalendarListMatch:
    calendar: str
    day: int
    month: int
    year: int
    locale: str

