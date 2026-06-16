import {
ref,
push,
get,
update,
remove
} from "firebase/database";

import { db } from "../firebase/firebase";

export async function addStudent(data){

await push(
ref(db,"students"),
data
);

}

export async function getStudents(){

const snapshot =
await get(
ref(
db,
"students"
)
);

if(!snapshot.exists())
return [];

const data =
snapshot.val();

return Object.entries(
data
).map(
([id,value])=>({

id,

...value

})
);

}

export async function updateStudent(
id,
data
){

await update(
ref(
db,
`students/${id}`
),
data
);

}

export async function removeStudent(
id
){

await remove(
ref(
db,
`students/${id}`
)
);

}
