import { Grid, Image } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";

export default function ItemList(list: any) {
  console.log("list: ", list);
  const itemList = list.list;
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {itemList.map((item: any) => (
            <Grid.Column key={item.id}>
              <Link href={`/view/${item.id}`}>
                <div className={styles.wrap}>
                  <img
                    src={item.image_link}
                    alt={item.name}
                    className={styles.img_item}
                  />
                  <strong className={styles.tit_item}>{item.name}</strong>
                  <span className={styles.txt_info}>
                    {item.category} {item.product_type}
                  </span>
                  <strong className={styles.num_price}>${item.price}</strong>
                </div>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
