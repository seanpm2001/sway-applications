import contractId from "@/contract-types/contract-ids.json";
import {
  Grid,
} from "@mui/material";
import { NFTCard } from "@/components/NFTCard";
import { useGetNFTData } from "@/hooks/useGetNFTData";

export default function Home() {
  const { nftData } = useGetNFTData();

  return (
    <Grid container spacing={2}>
      {nftData.map((nftDatum) => {
        return (
          <Grid xs={3}>
            <NFTCard cid={nftDatum?.ipfs_pin_hash} />
          </Grid>
        );
      })}
    </Grid>
  );
}
