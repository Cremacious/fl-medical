
import { getPurchaseById } from "@/lib/actions/history.actions";
import EditPurchaseForm from "./edit-purchase-form";
import { Purchase } from "@/lib/types";
const EditHistoryPage = async (props: {params: Promise<{id: string}>}) => {

    const {id} = await props.params;
    const purchaseDataRaw = await getPurchaseById(id);
    const purchaseData = purchaseDataRaw
        ? {
              ...purchaseDataRaw,
              items: purchaseDataRaw.purchaseItems.map((item) => ({
                  name: item.name,
                  quantity: item.quantity || 0,
                  price: item.price || 0,
                  id: item.id,
                  category: item.category ?? undefined,
                  type: item.type ?? undefined,
                  size: item.size ?? undefined,
                  thc: item.thc != null ? item.thc.toString() : undefined,
                  cbd: item.cbd != null ? item.cbd.toString() : undefined,
                  lineage: item.lineage ?? undefined,
                  details: item.details ?? undefined,
              })),
          }
        : null;

    return (
        <>
            {purchaseData ? (
                <EditPurchaseForm purchase={purchaseData} />
            ) : (
                <p>Loading or no data available</p>
            )}
        </>
    );
}
 
export default EditHistoryPage;