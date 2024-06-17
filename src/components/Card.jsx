import {
    Card as MTCard,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
  } from "@material-tailwind/react";
  
  export default function CustomCard() {
    return (
      <MTCard className="mt-2 w-full">
        <CardHeader color="blue-gray" >
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <p variant="" color="blue-gray" className="mb-1 font-semibold">
            Alberto José
          </p>
          <p>
            Encontrei na rua do São paulo, junto as bombas da Punangol
          </p>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Resgatar</Button>
        </CardFooter>
      </MTCard>
    );
  }
  