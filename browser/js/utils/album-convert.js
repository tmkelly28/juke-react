'use strict';

export default function albumConvert (raw) {
  raw.imageUrl = `/api/albums/${raw._id}.image`;
  return raw;
}
