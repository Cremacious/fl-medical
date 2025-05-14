import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import image from '@/assets/images/icons/eating.png';
import { Post } from '@/lib/types';

const TimelinePost = ({ post }: { post: Post }) => {
  return (
    <Link href={`/dashboard/post/${post.id}`}>
      <Card className="animationEffect border-none roundShadow customBlue min-w-[250px] ">
        <CardHeader>
          <CardTitle className="textOrange text-center font-bold truncate text-[clamp(0.8rem, 2vw, 1rem)]">
            {post.date ? new Date(post.date).toLocaleDateString() : 'No Date'}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="flex justify-center mx-4">
            <Image
              className="object-cover"
              src={image}
              alt={post.activity}
              height={100}
              width={100}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TimelinePost;
